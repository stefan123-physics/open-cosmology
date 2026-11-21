---
page: content/year-2/18.03/18-03-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_08pdf/ (read: rendered PDF, pages 1-2; the pdftotext output is garbled)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_08_iipdf/ (read: text and rendered PDF pages 1-2)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps8spdf/ (read: rendered PDF pages 1-3, only after the blind solve)
  - Supplementary Notes section 22, Mathlets page, Notes and Exercises section 4 and its solutions (not read; cited on the page only as links or for definitions)
verdict: pass-with-notes
---

# Review: Problem Set 8: pole diagrams, companion matrices and the phase plane, eigenvalues and eigenlines

## Blind solve

### My answers (written to this file before opening the full page, its calcs file or MIT's solutions)
- 29(a)(1) {1, i, -i}: f = c1 e^t + c2 cos t + c3 sin t (c1 != 0, (c2,c3) != 0), plus pieces with no poles. Grows like c1 e^t, with an oscillation of circular frequency 1 on top. Examples: e^t + sin t, F = 1/(s-1) + 1/(s^2+1); e^t + cos t, F = 1/(s-1) + s/(s^2+1).
- 29(a)(2) {-1 +- 4i}: f = e^{-t}(a cos 4t + b sin 4t): decaying oscillation, circular frequency 4, decay rate 1. Examples e^{-t} sin 4t, F = 4/((s+1)^2+16); e^{-t} cos 4t, F = (s+1)/((s+1)^2+16).
- 29(a)(3) {-1}: f = c e^{-t} for large t, decays without oscillation. Examples e^{-t}, 1/(s+1); 3e^{-t}, 3/(s+1).
- 29(a)(4) empty: F entire; f is zero for large t. Examples delta(t), F = 1; delta(t-1), F = e^{-s}; u(t)-u(t-1), F = (1-e^{-s})/s (removable at 0).
- 29(b)(i) W(s) = (3/2)/(s^2+s+5/2); p(s) = (2/3)s^2 + (2/3)s + 5/3 (m = b = 2/3, k = 5/3).
- 29(b)(ii) poles -1/2 +- (3/2)i; upper pole (-0.5, 1.5).
- 29(b)(iii) omega_r = sqrt(k/m - b^2/(2m^2)) = sqrt(2) = 1.414.
- 29(b)(iv) yellow box: section of the surface |W(s)| over the imaginary axis, bounded by the gain curve |W(i omega)|; green box: section over the real axis, |W(x)| for real s; red arrows: the poles (surface goes to infinity); yellow diamonds: the point i omega and the gain |W(i omega)| at the current input frequency. Height |W(i sqrt2)| for W of (i) = (3/2)/|1/2 + i sqrt2| = 1.00 (for the Mathlet's 1/(s^2+s+5/2) it would be 2/3).
- 32(a) eq. 1: r = -1, -3; x1 = e^{-t}, x2 = e^{-3t}; overdamped; x1' = -e^{-t}, x2' = -3e^{-3t}; slowest e^{-t}. Eq. 2: r = -1/2 +- 3i/2; x1 = e^{-t/2}cos(3t/2), x2 = e^{-t/2}sin(3t/2); underdamped; x1' = -e^{-t/2}((1/2)cos(3t/2) + (3/2)sin(3t/2)), x2' = e^{-t/2}((3/2)cos(3t/2) - (1/2)sin(3t/2)).
- 32(b) A1 = [[0,1],[-3,-4]], A2 = [[0,1],[-5/2,-1]].
- 32(c) e^{-t}: y/x = -1; e^{-3t}: y/x = -3 (rays into the origin).
- 32(d) x = (3/2)e^{-t} - (1/2)e^{-3t}; x = 0 at t = -(ln 3)/2 = -0.549.
- 32(e) x = (3/2)e^{-(t-a)} - (1/2)e^{-3(t-a)}, any real a.
- 32(f) x = (2/3)e^{-t/2} sin(3t/2), y = e^{-t/2}(cos(3t/2) - (1/3) sin(3t/2)); on the y axis at t = 2 pi n/3, n any integer; first after 0: 2.094; spirals inward clockwise.
- 32(g) on the x axis y = 0, so dx/dt = y = 0: the velocity (0, cx) is vertical (nonzero away from the origin).
- 33(a) lambda = -1, eigenvector (1,-1); lambda = -3, eigenvector (1,-3); solutions c e^{-t}(1,-1), c e^{-3t}(1,-3) (the straight trajectories of 32(c)).
- 33(b) lambda^2 + lambda - 2 = 0: lambda = 1, (4,1); lambda = -2, (1,1). Solutions c e^{t}(4,1) (away from the origin), c e^{-2t}(1,1) (towards it). Saddle.
- 33(c) saddle: in each wedge, trajectories come in near the line y = x and leave near the line y = x/4.

### Comparison (one line per answer id)
- p29-a-1: page choice 0 (grows like e^t, small oscillation of frequency 1) = mine. Agree.
- p29-a-2: page 4/((s+1)^2+16) = mine. Agree.
- p29-a-3: page 3e^{-t} (choice 2) = mine. Agree.
- p29-a-4: page (1-e^{-bs})/s = my third example. Agree.
- p29-b-i-p: page (2/3)(s^2+s+5/2) = mine. Agree.
- p29-b-i-w: page (3/2)/(s^2+s+5/2) = mine. Agree.
- p29-b-ii-re: -0.5 = mine. Agree.
- p29-b-ii-im: 1.5 = mine. Agree.
- p29-b-iii: 1.414 = mine. Agree.
- p29-b-iv-slice: the imaginary axis = mine. Agree.
- p29-b-iv-height: 1 = mine. Agree.
- p32-a-slow: e^{-t} = mine. Agree.
- p32-a-x1b: e^{-t/2}cos(3t/2) = mine. Agree.
- p32-a-dx1b: e^{-t/2}(-cos(3t/2)/2 - 3 sin(3t/2)/2) = mine. Agree.
- p32-a-damping: overdamped, underdamped = mine. Agree.
- p32-b-first: [0 1; -3 -4] = mine. Agree.
- p32-b-second: -2.5 = mine. Agree.
- p32-c-slope1: -1 = mine. Agree.
- p32-c-slope2: -3 = mine. Agree.
- p32-d: (3e^{-t} - e^{-3t})/2 = mine. Agree.
- p32-d-zero: -0.549 = mine. Agree.
- p32-e: (3e^{-(t-a)} - e^{-3(t-a)})/2 = mine. Agree.
- p32-f-x: (2/3)e^{-t/2} sin(3t/2) = mine. Agree.
- p32-f-y: e^{-t/2}(cos(3t/2) - sin(3t/2)/3) = mine. Agree.
- p32-f-time: 2.094 = mine. Agree.
- p32-f-turn: spiral into the origin, clockwise = mine. Agree.
- 32(g) (no box): velocity x(0, c), vertical = mine. Agree.
- p33-a-l1, p33-a-v1: -1, -1 = mine. Agree.
- p33-a-l2, p33-a-v2: -3, -3 = mine. Agree.
- p33-b-lneg, p33-b-vneg: -2, 1 = mine. Agree.
- p33-b-lpos, p33-b-vpos: 1, 4 = mine. Agree.
- p33-b-direction: away from the origin, faster and faster = mine. Agree.
- p33-c: in along y = x, out along y = x/4 = mine. Agree.
- MIT's solutions (read afterwards) agree with every line above.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | 29(b)(iv) solution, step "The five features", bullets "The yellow box" and "The yellow curve" | "The yellow box lies in the plane above the imaginary axis. The base is the amplitude response curve." (solutions p. 1) | First bullet: the yellow box is "the part of that plane under the surface: its top edge is the cut of the surface". Second bullet: the curve the sheet calls its base "is therefore the amplitude response curve". If the cut is the top edge, the base is the imaginary axis, so "therefore" contradicts the bullet before it; "under the surface" is not in MIT's solution and cannot be checked without the Mathlet. | Replace the first bullet with: "**The yellow box** lies in the vertical plane over the imaginary axis. One edge of it is the cut of the surface by that plane: the graph of $\|W(i\omega)\|$ against $\omega$." Keep the second bullet (that edge is the curve the sheet calls the base, the amplitude response curve). |
| 2 | info | 33(a) solution, step "Eigenlines and their solutions" | MIT's solution ends "These are the solutions found in 3(c)", a slip for 32(c) | "found in Problem 32(c)", silently corrected | Optional: add it to the bracketed note on MIT's slips in 33(a). |
| 3 | info | Intro, lecture mapping | MIT's Problem 29 is labelled L29 (16 Apr, "The pole diagram"), a lecture with no counterpart here | Mapped to this site's Lecture 23, with 10 and 14 for the throwback | Reasonable (last Laplace lecture here; `covers: [23, 24, 25]`; lessons checked: impulse-inputs-delta-function = 23, damped-oscillations = 10, resonance-and-beats = 14, first-order-systems = 24, eigenvalues-linear-systems = 25, sketching-linear-systems = 27). No change. |
| 4 | info | 33(c), Formula "General solution" | MIT's solution shows only the Mathlet's picture | Cites `secondHalf` with an `at` that says the solution is the page's own | Acceptable as written. |

Writer's notes, verified against the rendered PDFs: (a) the first sheet numbers the truck part "(ii)" a second time and the solutions call it (iii): correct. (b) Solution 29(a)(4) prints $F(s) = ae^{-bt}$ for $a\,\delta(t-b)$: correct, a slip for $ae^{-bs}$. (c) Solution 29(b)(i) prints $\dot w = u(t)e^{-t/2}\left(\frac32\cos(3t/2) - (-\frac12\sin(3t/2))\right)$, a doubled minus: correct, and $\dot w(0^+) = \frac32$ does not depend on it. (d) Solution 33(a) says "a nonzero eigenvalue" twice for an eigenvector: correct. The second sheet's correction of 29(b)(iv) (set b and k to b/m and k/m) is reported correctly. Pole and pole diagram are defined on the page with a citation to Supplementary Notes §22 (definitions are the standard ones; §22 itself not read). Trajectory, phase plane and eigenline are defined on the page, and the later lesson it points to (Lecture 27) exists. Mathlet parts are turned into "sketch, any tool"; the word description of the Mathlet window in 29(b)(iv) lists the same five features as the sheet.

## Arithmetic and answer checks
- Every final answer agrees with my blind solve and with MIT's solutions (comparison above).
- Calcs: `pytest tests/calc -k 18-03-problem-set-8` in the worktree: 67 passed. The eigenvector entries in calcs use the row of $A - \lambda I$ that the page's solution does not use first (checked: $3/(-4-\lambda)$, $-1/(-3-\lambda)$, $4/(2-\lambda)$ give $-1, -3, 1, 4$).
- Recomputed by hand: $\int_0^\infty e^{-2t}\sin 4t\,dt = 4/20 = 0.2$; $1 - e^{-1} = 0.6321$ (and Problem Set 7, Problem 26(c) is indeed this box function with this number); $W(1) = (3/2)/(9/2) = 1/3$, $p(1) = 3$; gain at $\omega = 0$: $1.5/2.5 = 0.6$; $\|W(i\sqrt2)\| = 1.5/\sqrt{1/4 + 2} = 1$, Mathlet version $2/3 = 0.667$; $\sqrt{5/2} = 1.581$; lesson formula $\sqrt{5/2 - 2\cdot\frac14} = \sqrt2$; $\ddot x_1(0) = \frac14 - \frac94 = -2$; hook inflection at $t = \frac{\ln 3}{2} = 0.549$, $x = 0.770$, $y = -1/\sqrt3 = -0.577$; at $t = -\frac{\ln3}{2}$, $y = 3\sqrt3 > 0$ (crosses the y axis going right, as stated); $e^{-\pi/3} = 0.351$, $e^{-2\pi/3} = 0.123$, $4\pi/3 = 4.189$; 32(e) with $a = 1$: zero at $0.451$; 33(c): $(e^{-4} + 4e^2, e^{-4} + e^2) = (29.57, 7.41)$, ratio $0.2505$; $A(5,2)^T = (2,-1)$; 32(g) velocity at $(1,0)$: $(0,-3)$.
- Each listed mistake checked against its formula, and each hint is true: 29(a) box 2 (all four); box 4 ($(1+e^{-bs})/s$ is infinite at 0); 29(b)(i) $p$ (leading coefficient 1 gives $\dot w(0^+) = 1$; factor $3/2$ gives velocity $2/3$; constant $9/4$ gives roots $-\frac12 \pm i\sqrt2$; $s^2 - s$ gives real part $+\frac12$); $W$ (all three); 32(a) ($\sqrt{5/2 - 1/4} = 3/2$; sign of the sine term); 32(d) (velocities $-4$ and $-2$; $x(0) = 2$; $e^{-t}$ has velocity $-1$); 32(e) (all three); 32(f) ($\dot x(0) = 3/2$ and $9/4$; the cosine starts at $(1, -1/2)$; $-\frac12\cdot\frac23 = -\frac13$).
- Tolerances (0.003 to 0.02) reject every nearby wrong value (e.g. 0.667 against 1 in 29(b)(iv); 1.5 and 1.581 against 1.414 in 29(b)(iii)) and accept three significant figures. Formula `vars` ranges ($s \in [0.3, 4]$, $t \in [0.2, 3]$, $a \in [0.3, 1.5]$, $b \in [0.5, 2]$) keep every answer and mistake finite.
- Choice answers p29-a-1 (0), p29-a-3 (2), p29-b-iv-slice (1), p32-a-damping (1), p32-b-first (2), p32-f-turn (0), p33-b-direction (2), p33-c (1): all correct.
- No hint gives the result away; every solution ends with a "Check the result" step that has a number or a substitution.

## Coverage and order
- Part II Problems 29 (a, b(i) to (iv)), 32 (a to g) and 33 (a to c) are all present, in MIT's order, with MIT's points: 8+4+4+4+6 = 26, 8+4+4+4+4+8+4 = 36, 8+8+4 = 20, total 82. Part I: 4+0+8+4 = 16, as in the solutions header.
- Part I is listed, not rewritten, and described correctly against the rendered sheets: first sheet 29(a) ($t$-shift of $(u(t) - u(t-2\pi))\sin t$) and 29(b) (three pole diagrams; answers at the foot of sheet p. 2); second sheet 32(a) five matrix products (row by column, column by row, three with a general $2\times2$), Notes 4A-2, 4B-1, 4B-6; 33 Notes 4C-1 with EP p. 344 for the $3\times3$ determinant. EP is named only.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in any of the three MIT PDFs (grep of the text and the rendered pages).
- MIT's solutions show Mathlet screenshots for 32(c), 32(f) and 33(c); the page uses none of them and draws its own graphs from formulas (`<Plot>`, each captioned "Our own graph").
- Wording is the page's own; the archaeological story of 29(b) is MIT's problem retold in new words. No OpenStax or LibreTexts. No em dashes; no `## Summary`.

## Notes
- Plot ranges: the hook in 32(c) starts at $s = -0.42$ with $y \approx 3.005$ (range top 3), and the first trajectory of 33(c) starts at $(6.37, 4.95)$, outside $[-6,6]\times[-4,4]$. Presumably clipped by the Plot component; I did not run `content:check` or look at the rendered graphs (uncertain).
- The sheet says the Mathlet's upper-left window shows $(d, -c)$; the page leaves this out, which is fine as the Mathlet is optional.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

- Warning 1 fixed: the "yellow box" point of 29(b)(iv) now says one edge of the box is the cut of the surface by the vertical plane over the imaginary axis (the graph of |W(iω)| against ω), so it no longer contradicts the "yellow curve" point.
- Info 2 taken: the 33(a) solution now notes MIT's "3(c)" as a slip for 32(c).
- Info 3 and 4: no change needed.
- Status set to `reviewed`.
