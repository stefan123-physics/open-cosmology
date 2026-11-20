---
page: content/year-1/18.01/polar-coordinates.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-32-polar-coordinates/ (read: local copy lec.html; links the transcript XRkgBWbWvg4.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/XRkgBWbWvg4.pdf (read: local copy transcript.pdf, page-split text tp.txt, 13 PDF pages, "ocw-18-01-f07-lec32")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec32/ (read: local copy n.html, which links lec32.pdf; notes.pdf = OCW cover + printed pp. 1-7 = PDF pp. 2-8, checked page by page with pdftotext -f N -l N; printed p. 1 also rendered as an image because the Symbol-font inequalities are lost in the text extraction)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec30/ (read: local copy of the Lecture 30 notes, printed p. 8 = PDF p. 9)
  - content/year-1/18.01/_course.json (read: Lecture 32 "Polar Coordinates", 33 "Exam 4 Review", no 34, 35 "Indeterminate Forms"; note "Lectures 8, 17, 26 and 34 were exams")
  - content/year-4/8.286/sphere-metrics.mdx (read, for the cosmology callout and the 8.286 Lecture 11 leadsTo; the 8.286 Lecture 11 transcript itself was not re-read)
  - calcs/18.01/polar-coordinates.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k polar`: 7 passed)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Parametric arc length and polar coordinates

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"), notes pages are printed footers (printed page = PDF page - 1, in both the Lecture 32 and the Lecture 30 notes). Every page citation was checked against tp.txt and the notes PDFs.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Speed and arc length", last paragraph: "one writes $(ds)^2 = (dx)^2 + (dy)^2$, but never the square of a ratio with the square inside" | Transcript pp. 2-3: squared differentials are used, "but we don't do it with these ratios"; the forbidden expression is only on the board (the transcript does not say what it is), and it is contrasted with $\frac{d^2x}{dt^2}$, which is legal. The natural reading is: do not write $(dx/dt)^2$ as $dx^2/dt^2$. | "the square of a ratio with the square inside" is hard to parse and does not show the expression. | Show it: "but $\left(\frac{dx}{dt}\right)^2$ is never written $\frac{dx^2}{dt^2}$, while $\frac{d^2x}{dt^2}$ ...". Mark it as the page's reading of the board, since the transcript does not spell it out. |
| 2 | info | "Curves in polar coordinates", first bullet: "$r = a$ is a circle; $\theta$ = constant is a ray ... (transcript, p. 10; notes, p. 6)" | Notes p. 6 (Example 5) has only the ray $\theta = b$, $0 \le r < \infty$. The circle $r = a$ is notes p. 5 (Example 4, as an area example). The "whole line if $r$ may be negative" is transcript p. 10 only. | Notes p. 6 for both. | "(transcript, p. 10; notes, pp. 5–6)". |
| 3 | info | "Polar coordinates", conventions: "$r \ge 0$ with $-\pi < \theta \le \pi$ or $0 \le \theta < 2\pi$ (p. 10; notes, p. 1)" | Transcript p. 10: $\theta$ "from minus pi to pi" (no endpoints stated) or "$\theta \ge 0$ and strictly less than $2\pi$". Notes p. 1 (checked on the rendered page): "$r \ge 0$ and $0 \le \theta \le 2\pi$", "another common convention is $r \ge 0$ and $-\pi \le \theta \le \pi$" (closed intervals), with $0 \le \theta \le 2\pi$ named as the more common one. | Half-open intervals. | The page's half-open intervals are the better statement (each point once) and match the transcript where it is explicit; acceptable as is. Optionally note that the notes write closed intervals. |
| 4 | info | "Curves in polar coordinates", after the off-centre circle: "dividing by $r$ loses only the origin, which the equation already contains (p. 12)" together with the open range $-\pi/2 < \theta < \pi/2$ | Transcript p. 12: $r = 0$ is "already included", and "if you want to throw in the $r = 0$ case ... this is repeating ... at the ends", i.e. the origin comes from $\theta = \pm\pi/2$. | With the strict range as written, $r = 2a\cos\theta$ never reaches the origin, so "already contains" needs the endpoints. | Add "(at $\theta = \pm\pi/2$, the ends of the range)". |
| 5 | info | leadsTo 18.01 Lecture 35, "(Lecture 33 is an exam review and 34 the exam)" | `_course.json`: 33 = "Exam 4 Review", 34 absent ("Lectures 8, 17, 26 and 34 were exams"), 35 = "Indeterminate Forms". The Lecture 32 notes (p. 7) end: "Next lecture is Lecture 34 as Lecture 33 is Exam 4", i.e. the 2006 notes number the exam 33 and the next topic 34, one less than OCW's video numbering. | Follows the OCW video numbering. | Correct for the site's links, which use the video numbering. Optionally, when the Lecture 35 page is written, note that its notes are numbered Lecture 34. |
| 6 | info | "An ellipse and its perimeter": "Numerically it is about 9.69"; cosmology callout: $(ds)^2 = (dr)^2 + r^2(d\theta)^2$ | Neither number nor the polar line element appears in the transcript or the notes. | Stated without citation. | Both are correct (perimeter 9.68845; the line element follows from $x = r\cos\theta$, $y = r\sin\theta$). Fine as the page's own additions. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt and the notes:
  - "Arc length of a parametric curve", reading2 p. 1: $ds^2 = dx^2 + dy^2$, then $\sqrt{(dx/dt)^2 + (dy/dt)^2}\,dt$, on p. 1. Correct.
  - "Perimeter of the ellipse", reading2 p. 4: speed $\sqrt{(2\cos t)^2 + (\sin t)^2}$, arc length $\int_0^{2\pi}\sqrt{4\cos^2 t + \sin^2 t}\,dt$, "not an elementary integral", "this is the answer", all p. 4. Correct.
  - "Surface area of the ellipsoid", reading2 p. 7: $\int 2\pi(2\sin t)\sqrt{4\cos^2 t + \sin^2 t}\,dt$ with limits 0 to $\pi$, "doable ... long", start with $u = \cos t$, all p. 7 (set-up begins p. 6). Correct. Numerically the integral is 34.69 (not quoted on the page).
  - "Polar coordinates", reading2 p. 8: $x = r\cos\theta$, $y = r\sin\theta$, "the one you should trust always", p. 8. Correct.
  - "Off-centre circle", reading2 p. 12: $(x-a)^2 + y^2 = a^2$, expansion, $r^2 - 2ar\cos\theta = 0$, $r = 2a\cos\theta$, range $-\pi/2 < \theta < \pi/2$, all p. 12 (the circle is introduced at the foot of p. 11). Correct.
  - "Area in polar coordinates", reading1 p. 4: slice "approximately a right triangle", area $\frac12 r(r\,d\theta)$, total $\int_{\theta_1}^{\theta_2}\frac12 r^2\,d\theta$, printed p. 4 (PDF p. 5). Correct.
- Prose citations: rigorous division by $(\Delta t)^2$ then limit (p. 2); circle $ds = a\,dt$, speed $a$, counterclockwise (p. 1); speed $ak$ (p. 2); $\frac{d^2x}{dt^2} = -a\cos t$ (p. 3); ellipse $\frac14x^2 + y^2 = 1$, $(0,1)$ at $t = 0$, $(2,0)$ at $t = \pi/2$ (p. 3), clockwise (p. 4), 0 to $2\pi$ once round (p. 5); not $y$ as a function of $x$ (pp. 4-6); Lecture 30 notes p. 8 (Example 7, ellipse $x = 2\sin t$, $y = \cos t$, "traced clockwise"): correct; ambiguity of $r = \sqrt{x^2+y^2}$ and $\tan^{-1}(y/x)$, $(-y)/(-x)$ (p. 8); "radar screen" grid (p. 9); $(1,-1)$ as $(\sqrt2, 7\pi/4)$ (p. 9), $(\sqrt2, -\pi/4)$ and $(-\sqrt2, 3\pi/4)$ (p. 10); notes p. 1 ($\theta = -\pi/4$) and p. 2 ($r = -\sqrt2$, $\theta = 3\pi/4$); $y = 1$ as $r = 1/\sin\theta$, $0 < \theta < \pi$ (p. 11; notes p. 6); $r$ as a function of $\theta$ in this course (p. 11); "the $2a$" remembered from $\theta = 0$ (p. 12); the "weird range" $\pi/2 < \theta < 3\pi/2$ tracing the circle again with negative $r$ (notes p. 3); Example 7 and the rose (notes p. 7); circle areas (notes p. 5). All match, apart from findings 2-4.
- Notes ellipse: $r(1 + \frac12\sin\theta) = 1 \Rightarrow r = 1 - \frac{y}{2} \Rightarrow x^2 + y^2 = 1 - y + \frac{y^2}{4} \Rightarrow x^2 + \frac34y^2 + y = 1$. Correct; the notes call it an ellipse with the origin at one focus. $r = \cos 2\theta$ has four petals. Correct.
- Off-centre circle area: $\int_{-\pi/2}^{\pi/2}2a^2\cos^2\theta\,d\theta = a^2\int(1 + \cos2\theta)\,d\theta = \pi a^2$; $r = a$: $\frac12a^2\cdot2\pi = \pi a^2$. Correct.
- Ellipse perimeter: scipy quad gives 9.688448, "about 9.69". Correct.
- Worked example (a): $dx/dt = -6\sin2t$, $dy/dt = 6\cos2t$, speed $\sqrt{36} = 6 = ak$. Correct.
- Worked example (b): $r = \sqrt8 = 2\sqrt2 = 2.828 \approx 2.83$; $(-2, 2)$ is in the second quadrant, $\theta = 3\pi/4$; $\tan^{-1}(-1) = -\pi/4$ on a calculator. Correct.
- Worked example (c): $r\cos\theta = 2$, $r = 2/\cos\theta$, $-\pi/2 < \theta < \pi/2$. Correct.
- Worked example (d): $\frac12\int_0^{2\pi}(1 + 2\cos\theta + \cos^2\theta)\,d\theta = \frac12(2\pi + 0 + \pi) = 3\pi/2 = 4.7124 \approx 4.71$; scipy quad 4.712389. Correct.
- Plot: $x = (1+\cos s)\cos s$, $y = (1+\cos s)\sin s$, $s \in [0, 2\pi]$ is the cardioid $r = 1 + \cos\theta$. Its extent is $x \in [-0.25, 2]$, $|y| \le 1.299$ (at $\theta = \pi/3$), inside the window $[-1, 2.5] \times [-1.6, 1.6]$. The point $(2, 0)$ is $\theta = 0$, $r = 2$. Caption (computed from the formula, area $3\pi/2$, axes possibly at different scales) is correct. content:check placed all labels without errors.
- calcs/18.01/polar-coordinates.yaml: entries ellipse-perimeter, off-centre-circle, notes-ellipse, circle-area, point-r, cardioid, speed agree with the page; pytest 7 passed. Every number on the page is covered.
- Quiz 1: index 2 ($ak$). Correct; explanation right.
- Quiz 2: index 3 ($\sqrt2$, $3\pi/4$ gives $(-1, 1)$). Checked the others: $(\sqrt2, 7\pi/4)$ and $(\sqrt2, -\pi/4)$ give $(1, -1)$; $(-\sqrt2, 3\pi/4)$ gives $(-\sqrt2\cdot(-\tfrac{\sqrt2}{2}), -\sqrt2\cdot\tfrac{\sqrt2}{2}) = (1, -1)$. Correct.
- Quiz 3: index 1 ($r = 2a\cos\theta$, $-\pi/2 < \theta < \pi/2$). Correct; explanation right. Distractor $r = 2a\sin\theta$ is the circle centred at $(0, a)$, a good distractor.
- Quiz 4: index 1 ($\frac12r^2\,d\theta$). Correct; explanation matches notes p. 4.
- Flashcards: all four correct.

## Coverage and order
- The page follows the Lecture 32 transcript order exactly: parametric arc length and speed (pp. 1-2), notation (pp. 2-3), ellipse and its perimeter (pp. 3-5), ellipsoid surface (pp. 6-8), polar coordinates (pp. 8-9), $(1,-1)$ (pp. 9-10), conventions, $r = a$ and the ray (p. 10), $y = 1$ (p. 11), the off-centre circle and its range (pp. 11-12). The lecture ends "Next time we'll figure out area in polar coordinates" (pp. 12-13).
- Lecture 32 notes, all covered: Figure 1 and definition (p. 1), Example 1 and conventions (pp. 1-2), Example 2 off-centre circle and the "weird range" (pp. 2-3), area (p. 4), Examples 3 and 4 (p. 5), Examples 5 and 6 (p. 6), Example 7 and Example 8, the rose (p. 7). The page moves the notes' area section after the curves, which keeps the lecture's order and puts the notes-only material last: fine. The rose is only mentioned, as in the notes (which give only the first petal's range, $-\pi/4 < \theta < \pi/4$).
- Left out from the transcript: the aside on the migrating exponent in $\sin^2 t$ (p. 3), the student questions on exams and memorising formulas (pp. 5, 7-8), and the remark that polar coordinates are used heavily in 18.02 and physics (p. 9). None is needed later.
- Added beyond the sources: the numerical perimeter 9.69 and the polar line element in the callout (finding 6), and the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript, the notes or the OCW lecture/notes pages (grep on the extracted text and the saved HTML found none; the notes cover carries only the usual Terms of Use line). The page reuses no figure.
- No copied paragraphs: every section is rewritten. Short phrases kept from the lecture ("radar screen", "the one to trust", "the integral is the answer", "walking backwards") are brief and descriptive.
- Worked example is original: the circle $x = 3\cos2t$, $y = 3\sin2t$, the point $(-2, 2)$, the line $x = 2$ and the cardioid appear in neither the transcript nor the notes. The cardioid area is a standard textbook exercise, which is fine.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: consistent with content/year-4/8.286/sphere-metrics.mdx (Lecture 11), which builds the 2-sphere metric $ds^2 = R^2(d\theta^2 + \sin^2\theta\,d\phi^2)$ from perpendicular angle steps and the 3-sphere metric for the closed universe, and remarks that near the origin the $u$-form becomes "the ordinary flat metric in polar coordinates". "The circle at a given angle from a pole has a radius that is not simply proportional to that angle" matches the radius $R\sin\theta$ ($R\sin\psi$ in three dimensions). Fair and correctly worded; nothing is attributed to Guth. (Checked against the 8.286 page, not against the 8.286 Lecture 11 transcript.)
- leadsTo 8.286 Lecture 11 is "Non-Euclidean Spaces: Closed Universes", the lecture of `sphere-metrics`: correct, and the reason matches that page.
- leadsTo 18.01 Lecture 35 and its reason agree with `_course.json` (finding 5 for the notes' different numbering).
- First paragraph: "Area in polar coordinates, which the lecture leaves for next time, is in the notes for this lecture" is accurate (transcript pp. 12-13; notes p. 4).
- Reading URLs: `resources/lec32/` is the notes resource page (links lec32.pdf); `XRkgBWbWvg4.pdf` is the transcript linked from the Lecture 32 page. Correct. The notes' title "Polar Co-ordinates, Area in Polar Co-ordinates" matches the reading title.
- No em dashes on the page.
- Not checked: the video itself; data/symbols.json meanings (content:check reports no symbol errors for this page).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the notation sentence now shows the expression: the square of a derivative is written (dx/dt)², never with the square moved inside onto dx and dt; d²x/dt² is a different, legitimate notation.
- Info: the r = a circle cites notes pp. 5–6; the off-centre circle now says the origin is reached at the ends of the range, θ = ±π/2. The other info items are left as they are (the ranges and numbering are consistent with the site's lecture numbers).
