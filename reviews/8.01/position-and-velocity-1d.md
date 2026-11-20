---
page: content/year-1/8.01/position-and-velocity-1d.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read: the Chapter 4 PDF text, supplied pre-converted; the resource page itself was also fetched and resolves to MIT8_01scS22_chapter4.pdf)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/ (read: segment list 1.1–1.7)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/1-1-coordinate-systems-and-unit-vectors-in-1d-position-vector-in-1d/ (read: page only; video transcript not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/1-6-derivatives/ (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/1-7-worked-example-derivatives-in-kinematics/ (read: problem statement; video/transcript not read)
  - Segments 1.2–1.5 (could not read: not fetched; they are video segments whose transcripts were not read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/video_galleries/video-lectures/ (read: lecture titles)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-4-the-kinematics-of-the-homogeneous-expanding-universe/ (read: description only; transcript and slides not read)
verdict: needs-changes
---

# Review: Position and velocity in one dimension

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Summary, last bullet | Ch. 4 Sec. 4.3.3: v(t) "can be positive, zero, or negative, depending on whether the object is travelling in the positive x-direction, instantaneously at rest, or the negative x-direction." MIT does not say v = 0 means a turning point. | "$v = 0$ marks a turning point." | Wrong as a general statement: v = 0 is necessary but not sufficient for a turning point (e.g. $x = t^3$ has $v(0) = 0$ and no reversal). Write "$v = 0$ means momentarily at rest; if $v$ changes sign there, the object turns around." |
| 2 | warning | `<Formula label="Displacement">`, `at="Eqs. (4.2.2)–(4.2.3)"` | Eq. (4.2.2) is the time interval $\Delta t = t_2 - t_1$; displacement is Eq. (4.2.3) alone. | Cites (4.2.2)–(4.2.3) for the displacement formula. | Change to `at="Eq. (4.2.3)"` (or add $\Delta t$ to the formula if the range is kept). Borderline citation error, since the range does include the right equation. |
| 3 | warning | `<Formula label="Basic derivatives">`, `cite="mit" at="segment 1.6 Derivatives"` | Segment 1.6 lists $d(At^n)/dt = nAt^{n-1}$ plus exponential, log, sine and cosine rules. It does not state the sum rule or $d c/dt = 0$ as separate rules. | Cites 1.6 for the constant, power, sum and constant-multiple rules. | Either cite 1.6 only for the power rule (with constant $A$), or mark the sum rule as standard calculus not taken from 1.6. Also `cite="mit"` resolves to `source.url` (segment 1.1), not 1.6; consider adding a 1.6 reference key. |
| 4 | warning | Cosmology callout, last sentence | (Not in 8.01.) | "$H = \dot a/a$ measures how fast the universe is expanding right now." | $H(t)$ is the expansion rate at any time $t$; only its present value $H_0$ is "right now". Write "measures how fast the universe is expanding at time $t$ (today's value is $H_0$)." |
| 5 | info | "Average velocity is not always the mean of two velocities" | Example 4.2: the two are "only equal in the special case when the velocity is a linear function" of t. | Matches MIT. | Strictly, linear velocity is sufficient, not necessary (they can coincide on particular intervals for other motions). Optional: "is guaranteed to give the right answer only when…". Could also mention the Mean Value Theorem framing MIT uses. |
| 6 | info | Plot | Example 4.2 uses $x_0 + v_0 t + \tfrac12 b t^2$. | Same function and notation as the Plot model. | Fine (standard). At slider extremes (e.g. $x_0=5, v_0=6, b=3$, $x(6)=95$ m) the curve leaves the fixed range $[-2, 20]$. Cosmetic only. |
| 7 | info | `references.guth.url` | The lecture has its own resource page. | Links to the whole 8.286 video gallery. | Link to `.../resources/lecture-4-the-kinematics-of-the-homogeneous-expanding-universe/`. |

## Arithmetic and answer checks
- Worked example, $x(t) = 2 + 3t - t^2$: the expansion of $x(t+\Delta t)$ is correct. $\Delta x = 3\Delta t - 2t\Delta t - \Delta t^2$ is correct. $\Delta x/\Delta t = 3 - 2t - \Delta t$ gives $v = 3 - 2t$, which is correct. The turning point $t = 1.5$ s and $x(1.5) = 2 + 4.5 - 2.25 = 4.25$ m are correct. $x(1) = 4$ m and $x(2) = 4$ m, so $v_\text{ave} = 0$, are correct, and $[1, 2]$ is centred on 1.5. Here $v$ does change sign at $t = 1.5$, so the turning-point claim holds for this example.
- Quiz 1: displacement 0, so the average velocity is 0 m/s (index 1) and the average speed is 400/80 = 5 m/s. Correct.
- Quiz 2: slope of the tangent (index 2). Correct.
- Quiz 3: $v = 4t$, $v(3) = 12$ m/s (index 0). Correct; the distractor 22 is $x(3)$.
- Quiz 4: negative $v$ means moving toward $-x$ (index 1). Correct, and the explanation is correct.
- Flashcards: all five are correct.
- Plot defaults ($x_0=1$, $v_0=4$, $b=-1.2$): the maximum is $x \approx 7.67$ m at $t \approx 3.33$ s, and $x(6) = 3.4$ m. Both are within range.
- Cosmology formula: $\ell = a\ell_c \Rightarrow d\ell/dt = \dot a\,\ell_c = (\dot a/a)\,\ell = H\ell$. Correct.

## Coverage and order
- Page order follows 1.1 (coordinate system), 1.2 (position), 1.3 (displacement), 1.4 (average velocity), 1.5 (instantaneous velocity) and 1.6 (derivatives), which matches Ch. 4 Sec. 4.1–4.3. Segments 1.2–1.5 content was checked against the course notes only; their videos were not read.
- Left out: segment 1.6's exponential, logarithm, sine and cosine derivative rules. Segment 1.7's worked example (model rocket, $y(t) = \tfrac12(a_0-g)t^2 - \tfrac{1}{30}(a_0/t_0^4)t^6$, find acceleration) is also left out. It belongs more naturally with acceleration (Lesson 2), but it is part of the cited 1.1–1.7 range; either cover it or narrow `source.title` to 1.1–1.6.
- Left out: the Mean Value Theorem discussion in Example 4.2 (only its conclusion is used).
- Added: the interactive secant/tangent plot, the PhET Calculus Grapher and the cosmology callout. These are additions, which is fine.

## Licensing
- The OCW course pages and the chapter resource page carry CC BY-NC-SA 4.0. The chapter text contains no "All rights reserved" or "Courtesy of" marks; it has one Feynman epigraph (Addison-Wesley), which the page does not reuse.
- The worked example is original: it uses a different function from MIT Example 4.1 ($x_0 + \tfrac12 bt^2$). No verbatim copying was found beyond standard terminology. Some sentences closely paraphrase Sec. 4.2.1 ("can be positive, zero or negative"; "has both a size and a direction, it is a vector"), which is acceptable.
- No OpenStax or LibreTexts material was detected.

## Notes
- Cosmology attribution: the lecture title "The Kinematics of the Homogeneous Expanding Universe" is verified as 8.286 Fall 2013 Lecture 4. The lecture description mentions Hubble's law. Whether Lecture 4 itself introduces $\ell_p = a(t)\ell_c$ and $H = \dot a/a$ is **uncertain**, because the transcript and slides were not read. It is plausible, since this is the kinematics lecture and Guth's notation does use a coordinate distance $\ell_c$ times $a(t)$, but it is unverified. One small nuance: in Guth's convention $\ell_c$ is a coordinate distance (in "notches") and $a$ carries units, which differs slightly from "fixed comoving distance" with a dimensionless $a$. This is not an error for an intro page.
- Equation numbers (4.2.1), (4.3.1)–(4.3.3) and (4.3.5)–(4.3.6) match the course notes.
- The course-note PDF footer reads "8.01 Classical Mechanics, Spring 2022", while it is hosted under 8.01SC Fall 2016. The page's description "8.01SC Course Notes" is acceptable.

## Resolution (2026-11-14, by the page author)
- Error fixed: summary now says $v = 0$ means momentarily at rest, and a turn only if $v$ changes sign.
- Displacement formula now cites Eq. (4.2.3) only.
- Derivative box now lists only the rules from segment 1.6 (power, exponential, log, sine, cosine); the sum and constant rules moved to prose.
- Cosmology callout distinguishes $H(t)$ from today's $H_0$.
- Open: segment 1.7 (worked example) has no counterpart; video transcripts not yet compared. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
