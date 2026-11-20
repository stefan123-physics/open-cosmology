---
page: content/year-1/18.01/arc-length-and-surface-area.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-31-parametric-equations/ (read: local copy lec.html; links the transcript TpWQlKHPyJ4.pdf and the notes resource lec31; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/TpWQlKHPyJ4.pdf (read: local copy transcript.pdf, page-split text tp.txt, 11 PDF pages, "ocw-18-01-f07-lec31")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec30/ (read: local copy notes.pdf; printed pp. 4-8 = PDF pp. 5-9, checked page by page with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec31/ (read: local copy notes.pdf, OCW cover + printed pp. 1-4 = PDF pp. 2-5)
  - content/year-1/18.01/_course.json (read: Lecture 31 = "Parametric Equations", Lecture 32 = "Polar Coordinates")
  - content/year-4/8.286/non-euclidean-geometry.mdx (read, for the cosmology callout and the 8.286 Lecture 10 leadsTo; the 8.286 Lecture 10 transcript itself was not re-read)
  - calcs/18.01/arc-length-and-surface-area.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k arc-length`: 7 passed)
  - components/Plot.tsx (read, for the aspect ratio of the parametric plot)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Arc length, surface area and parametric curves

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"), notes pages are printed footers (printed page = PDF page - 1 in both notes files). Every page citation was checked against tp.txt and the notes PDFs.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Surface area of revolution", second paragraph: trumpet $\int_0^a 2\pi x^2\sqrt{1+4x^2}\,dx$ "which the same substitution evaluates, at length (pp. 7–8; notes for Lecture 31, pp. 2–3)" | Transcript pp. 7-8: the trumpet is $y = x^2$, substitution $x = \tfrac12\tan u$, not carried out. The Lecture 31 notes' trumpet (Example 2, pp. 2-3) is a **different curve**, $x = t^2$, $y = t^3$, $0 \le t \le 1$, area $2\pi\int_0^1 t^4\sqrt{4+9t^2}\,dt$, substitution $t = \tfrac23\tan u$, also stopped part-way. | The notes citation reads as if the notes do the same integral by the same substitution. | Cite the transcript alone for this integral, and if wanted add: "the notes revolve the curve $x = t^2$, $y = t^3$ instead, with $t = \tfrac23\tan u$ (notes for Lecture 31, pp. 2–3)". |
| 2 | warning | Plot (ellipse and "circle of radius 2") | - | Caption calls the dashed curve a circle and invites comparison with the ellipse. `components/Plot.tsx` sets a fixed height (360 px) and takes the width from the container, with no equal-scale setting (no `scaleanchor` anywhere in `components/`). With domain and range both 7 units wide, the circle is drawn as an ellipse squashed vertically on a wide screen, and the ellipse looks less elongated than it is; on a narrow phone the distortion goes the other way. The curves themselves are computed correctly. | Either give Plot an equal-aspect option (Plotly `yaxis.scaleanchor: "x"`) and use it here, or change the caption so it does not rely on the visual shape (e.g. "the dashed curve has $x^2 + y^2 = 4$; the axes are not drawn to the same scale"). |
| 3 | info | "A parabola", last sentence: "The notes' example is the curve $x = t^2$, $y = t^3$ ... (notes for Lecture 31, p. 1)" | Notes p. 1 ("Arclength, continued", Example 1): a **parametric** curve, $(ds)^2 = (2t\,dt)^2 + (3t^2\,dt)^2$, length $\tfrac1{27}(13^{3/2} - 4^{3/2})$. Correct number and page. | Placed under "A parabola" before parametric curves are introduced, without saying it is parametric or that $ds$ is taken in $dt$. | Move it to "Parametric curves" (after $ds = a\,dt$), or add "(a parametric curve; here $ds = \sqrt{4t^2 + 9t^4}\,dt$)". |
| 4 | info | "Arc length", second paragraph: "this is the first time squares of infinitesimals appear (pp. 1–2; notes for Lecture 30, pp. 4–5)" | The "first time we're dealing with squares of infinitesimals" remark is transcript p. 2 only. Notes pp. 4-5 give the $ds$ formula and the $(ds)^2/(dx)^2$ algebra, not that remark. | Citation covers both. | Harmless; optionally move the notes citation to the formula sentence. |
| 5 | info | "A parabola": "The factor $\tfrac12$ in the substitution makes $4x^2 = \tan^2 u$ (p. 6)" | Transcript p. 6: "When you square 2x, you get (4x)^2", a lecturer (or transcription) slip for $4x^2$; the student's question about the other $\tfrac12$ in the answer is also on p. 6. | States the correct relation, without comment. | Fine (the page does not repeat the slip). Rule 4 would allow a bracketed note, but it is too small to need one. |
| 6 | info | "Surface area of revolution", sphere paragraph: "Every slice of the same width has the same area, near the equator or near a pole." | Transcript p. 9 says "see what it's saying geometrically, a little bit" but then moves to a question; neither the transcript nor the notes state this conclusion. | Stated without a citation. It is correct (it follows directly from $2\pi a(x_2 - x_1)$; Archimedes' hat-box theorem). | Fine. Optionally mark it as the page's own reading of the formula. |
| 7 | info | Sphere formula, prose "(p. 8)" for $ds = \frac{a}{\sqrt{a^2-x^2}}\,dx$ | $1 + x^2/(a^2 - x^2) = a^2/(a^2 - x^2)$ is on p. 8; the square root $\sqrt{a^2/(a^2-x^2)}\,dx$ as $ds$ is written on p. 9. | "(p. 8)" | "(pp. 8–9)" would be exact. |
| 8 | info | "Surface area of revolution" | Transcript p. 7 also introduces the notation $dS$ for the surface-area element (capital S, as opposed to arc length $s$), "also used for $dA$"; p. 9 answers a question on whether surface area can be done with shells (not quite: a shell already has thickness). | Both omitted. | Optional: one sentence on $dS$, since it prepares 18.02. |
| 9 | info | "Parametric curves": $ds = a\,dt$ (notes for Lecture 30, p. 8) | Transcript p. 11 ends: "the last little bit is going to be the arc length ... we'll do that next time" (Lecture 32). The Lecture 30 notes p. 8 do give $ds = a\,dt$. | Includes it, cited to the notes. | Correct and correctly cited; the page goes slightly beyond the Lecture 31 video, which is fine because the notes cover it. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt and the notes PDFs:
  - "Arc length element", reading3 pp. 1-2: $(\Delta s)^2 \approx (\Delta x)^2 + (\Delta y)^2$ on p. 1, $ds = \sqrt{dx^2 + dy^2}$ and the factored form $\sqrt{1 + (dy/dx)^2}\,dx$ on p. 2 (board). Correct.
  - "Arc length", reading3 p. 2: $\int_a^b\sqrt{1 + f'(x)^2}\,dx$ "mixing in a little bit of Newton's notation", p. 2. Correct.
  - "Arc of a circle", reading3 p. 4: $1 + (y')^2 = 1/(1 - x^2)$, $\alpha = \int_0^a dx/\sqrt{1-x^2} = \sin^{-1}a$, $\sin\alpha = a$, all p. 4. Correct. Lecture 30 notes p. 6 (PDF p. 7) has the same computation with $s$ in place of $\alpha$ ("sin s = a"); the prose cite "notes for Lecture 30, p. 6" is correct.
  - "Length of a parabola", reading3 p. 6: antiderivative $\tfrac14\ln(2x + \sqrt{1+4x^2}) + \tfrac12 x\sqrt{1+4x^2}$ between 0 and $a$, p. 6. The transcript's bracketing is garbled ("¼ ln(2x + √(1+4x²) + ½x√(1+4x²))"); the page's bracketing is the correct one. Differentiated by hand: $\tfrac14\cdot\frac{2}{\sqrt{1+4x^2}} + \tfrac12\sqrt{1+4x^2} + \frac{2x^2}{\sqrt{1+4x^2}} = \frac{1+4x^2}{\sqrt{1+4x^2}} = \sqrt{1+4x^2}$. Correct; calcs `parabola-length` also passes.
  - "Surface area element", reading3 p. 7: $ds$ times circumference $2\pi y$, tilt argument, p. 7. Correct. Notes for Lecture 31, p. 2 ("The surface area of the thin strip of width ds is 2πy ds") also correct.
  - "A slice of a sphere", reading3 p. 9: $2\pi\sqrt{a^2-x^2}\cdot\sqrt{a^2/(a^2-x^2)}\,dx$, cancellation, $2\pi a(x_2 - x_1)$, p. 9. Correct. Notes for Lecture 31, pp. 3-4 (unit sphere, slice between $x = a$ and $x = b$, $2\pi(b - a)$, whole sphere $4\pi$, half $2\pi$) also correct.
  - "A circle, parametrized", reading3 p. 10: $x = a\cos t$, $y = a\sin t$, $x^2 + y^2 = a^2$, p. 10. Correct; Lecture 30 notes p. 7 (PDF p. 8, Example 6) also correct.
- Prose citations: return to geometry and multivariable calculus (p. 1), mileage markers (p. 1), $f'(x)^2 \ne f''(x)$ (p. 2), limits $a, b$ vs $s_0, s_n$ (p. 3), $y = mx$ from 0 to 10 and Pythagoras (p. 3), "break things up into infinitesimal bits" (p. 3), radians and the sine defined after the arcsine, compared with log/exp (p. 5), parabola $\int_0^a\sqrt{1+4x^2}\,dx$ (p. 5), $x = \tfrac12\tan u$ (p. 6), limits back in $x$ (pp. 6-7), trumpet "metal, not the insides" (p. 7), "a program ... would spit out an answer" (p. 8), hemisphere and whole sphere (p. 9), rotating about the $y$-axis (p. 9), parametric curves as preparation for multivariable thinking, trajectory, $(x(0), y(0))$, $(x(1), y(1))$ (p. 10), planet, $t = 0$, $t = \pi/2$, counterclockwise, repeats at $2\pi$ (pp. 10-11). All match, apart from findings 1, 4 and 7.
- Lecture 30 notes, printed pages: p. 4 arc length and $ds$; p. 5 $(ds)^2/(dx)^2$ algebra and Example 5 begins; p. 6 circle, $\sin s = a$; p. 7 Figure 6 and parametric Example 6; p. 8 Example 7 ellipse $x = 2\sin t$, $y = \cos t$ "traced clockwise" and $ds = a\,dt$. The page's "notes for Lecture 30, p. 8" for both the ellipse and $ds = a\,dt$ is correct. Ellipse check: $(2\sin t)^2/4 + \cos^2 t = 1$; $t = 0$ at $(0, 1)$, $t = \pi/2$ at $(2, 0)$, so clockwise. Correct.
- Radians and the arcsine (p. 5): the transcript says this is "your first true definition of radians", "the first thing that gets defined is the arcsine. And the next thing that gets defined is the sine", and compares it with defining the log as an integral and then the exponential from it. The page's wording ("now they are **defined** that way, and the sine is defined as the inverse of the arcsine, just as the logarithm was defined first as an integral and the exponential after it") is a faithful paraphrase.
- Claimed transcript slip (p. 9): confirmed. tp.txt p. 9 reads "if you take the whole sphere, that's starting at x_1 = a, and x_2 = a, you're getting 2 pi a times (a - (-a))". The page's note "(The transcript has "$x_1 = a$" for the whole sphere where it means $-a$, p. 9.)" is accurate; the following $(a - (-a))$ shows $-a$ was meant. The notes (p. 4) have the correct $a = -1$, $b = 1$ for the unit sphere.
- Notes example $x = t^2$, $y = t^3$: $\int_0^1\sqrt{4t^2 + 9t^4}\,dt = \int_0^1 t\sqrt{4 + 9t^2}\,dt = \tfrac1{27}[(4+9t^2)^{3/2}]_0^1 = \tfrac1{27}(13^{3/2} - 8) = 1.43971$; numerical quadrature 1.43971. Correct, and $4^{3/2} = 8$ as in the calcs entry.
- Line $y = mx$, 0 to 10: $10\sqrt{1+m^2} = \sqrt{10^2 + (10m)^2}$. Correct.
- Hemisphere $2\pi a\cdot a = 2\pi a^2$, sphere $2\pi a\cdot 2a = 4\pi a^2$. Correct.
- Parametric circle: $dx = -a\sin t\,dt$, $dy = a\cos t\,dt$, $ds = a\,dt$. Correct.
- Worked example (a): $y' = \tfrac32 x^{1/2}$, $(y')^2 = \tfrac94 x$, $\int_0^4\sqrt{1 + 9x/4}\,dx = \tfrac49\cdot\tfrac23[(1 + 9x/4)^{3/2}]_0^4 = \tfrac{8}{27}(10^{3/2} - 1) = 9.0734 \approx 9.07$. Correct.
- Worked example (b): band from $x = -1000$ to $1000$ km, width 2000 km; fraction $2000/(2\times6371) = 0.15696 \approx 0.157$, "about 16%". Correct. 6371 km is the standard mean Earth radius (the radius cancels except in the denominator width $2a$).
- Worked example (c): $x^2/4 + y^2/9 = 1$, half-axes 2 and 3, $(2, 0)$ at $t = 0$, $(0, 3)$ at $t = \pi/2$: counterclockwise. Correct.
- Plot: curve 1 `2*cos(s)`, `3*sin(s)`, curve 2 `2*cos(s)`, `2*sin(s)`, both over $[0, 2\pi]$; points $(2, 0)$ ($t = 0$, on both curves) and $(0, 3)$ ($t = \pi/2$, on the ellipse); window $[-3.5, 3.5]^2$ contains both curves. Caption says it is computed from the formulas and both run counterclockwise: correct. content:check placed all labels without errors. See finding 2 for the aspect ratio.
- calcs/18.01/arc-length-and-surface-area.yaml: entries circle-arc, parabola-length, notes-curve, sphere-slice, quiz-line, example-a, example-b agree with the page; pytest 7 passed. All numbers on the page are covered.
- Quiz 1: index 0 ($\sqrt{1 + f'(x)^2}\,dx$). Correct; explanation right.
- Quiz 2: index 1 ($2\sqrt{10} = 6.3246 \approx 6.32$; hypotenuse of legs 2 and 6, $\sqrt{40} = 2\sqrt{10}$). Correct.
- Quiz 3: index 0 ($2\pi ah$). Correct, and by symmetry it holds for any direction of the two parallel planes, so the question needs no axis. Distractor $4\pi a^2 h$ has the wrong dimensions, which makes it easy to rule out (harmless).
- Quiz 4: index 1 (ellipse $x^2/4 + y^2/9 = 1$, counterclockwise). Correct. It is the same curve as worked example (c) and the Plot, so it tests recall rather than skill; a different curve (e.g. $x = 3\cos t$, $y = -\sin t$, clockwise) would test more (optional).
- Flashcards: all four correct.

## Coverage and order
- The page follows the Lecture 31 transcript order exactly: arc length (pp. 1-3), straight line (p. 3), circle and radians (pp. 4-5), parabola (pp. 5-7), surface area and trumpet (pp. 7-8), sphere (pp. 8-9), parametric curves and the circle (pp. 10-11).
- Lecture 30 notes pp. 4-8 are covered: $ds$ (p. 4-5), circle (pp. 5-6), Example 6 (p. 7), Example 7 ellipse and $ds = a\,dt$ (p. 8).
- Lecture 31 notes: Example 1 (p. 1) mentioned (finding 3), strip area $2\pi y\,ds$ (p. 2) used, Example 2 trumpet for $x = t^2$, $y = t^3$ (pp. 2-3) not covered and miscited (finding 1), Example 3 sphere (pp. 3-4) covered. The notes' remark "you can always use numerical methods" matches the page's "a program can evaluate them".
- Left out from the transcript: the $dS$ notation (p. 7) and the shells question (p. 9) (finding 8). Neither is needed for the rest of the course.
- Added beyond the transcript: $ds = a\,dt$ (from the notes; the lecture defers it to Lecture 32) and the "same area for every slice of equal width" remark (finding 6).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript text or either notes file (grep on the extracted text found none; the OCW cover pages carry only the usual Terms of Use line). The page reuses no figure.
- No copied paragraphs: every section is rewritten. Short phrases kept from the lecture ("mileage markers", "trajectory", "trumpet", "the metal, not the insides") are short and descriptive.
- Worked examples are original: $y = x^{3/2}$ on $[0, 4]$, the Earth's equatorial band and the ellipse $x = 2\cos t$, $y = 3\sin t$ appear in neither the transcript nor the notes (the notes' ellipse is $x = 2\sin t$, $y = \cos t$, clockwise). The arc length of $y = x^{3/2}$ is a common textbook exercise (with other limits), which is fine.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: consistent with content/year-4/8.286/non-euclidean-geometry.mdx (Lecture 10), which states that Gauss held only inner properties to matter and that a geometry is fixed by its metric $ds^2 = g_{xx}dx^2 + 2g_{xy}dx\,dy + g_{yy}dy^2$, with $ds^2 = dx^2 + dy^2$ for the flat plane, and that the sphere, plane and GBL geometry correspond to closed, flat and open universes. "Gauss realised that a curved surface is fixed by its own rule for $ds^2$" and "in a closed or open universe, the distance along a path is the integral of $ds$ with a metric that is not Euclidean" are fair and correctly attributed. (Checked against the 8.286 page, not against the 8.286 Lecture 10 transcript.)
- leadsTo: 18.01 Lecture 32 is "Polar Coordinates" in `_course.json`, and the transcript (p. 10) announces polar coordinates as coming next: correct. 8.286 Lecture 10 is "Introduction to Non-Euclidean Spaces", the lecture of `non-euclidean-geometry`: correct and the reason given matches that page.
- Reading URLs: `resources/lec30/` and `resources/lec31/` are the notes resource pages (they link lec30.pdf / lec31.pdf), and `TpWQlKHPyJ4.pdf` is the transcript linked from the Lecture 31 page. Correct.
- The source title "Lecture 31: Parametric Equations" matches `_course.json`. The Lecture 30 notes are titled "Lecture 30" though their arc length part belongs to Lecture 31's topic; the page explains the split in its first paragraph.
- Not checked: the video itself; data/symbols.json meanings (content:check reports no symbol errors for this page).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the trumpet integral now cites the transcript (pp. 7–8) alone, with a bracket saying the notes revolve x = t², y = t³ instead.
- **Warning 2:** the dashed comparison circle is removed from the Plot (the component has no equal-aspect setting), and the caption says the axes may be drawn at different scales. An equal-aspect option for Plot would be a site-code change for the owner.
- Info: the notes' x = t², y = t³ is now called parametric; the sphere's ds cites pp. 8–9; "every slice of the same width has the same area" now reads as a conclusion from the formula. The other info items are left as they are.
